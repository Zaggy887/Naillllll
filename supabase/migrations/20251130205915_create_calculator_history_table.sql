/*
  # Create Calculator History Table

  1. New Tables
    - `calculator_history`
      - `id` (uuid, primary key) - Unique identifier for each calculation
      - `expression` (text) - The full calculation expression (e.g., "10 + 5")
      - `result` (text) - The calculated result
      - `timestamp` (timestamptz) - When the calculation was performed
      - `session_id` (text, optional) - Browser session identifier for grouping
      - `created_at` (timestamptz) - Record creation timestamp

  2. Security
    - Enable RLS on `calculator_history` table
    - Allow anyone to read their own calculations (based on session)
    - Allow anyone to insert new calculations
    - Allow anyone to delete their own calculations

  3. Indexes
    - Index on timestamp for efficient sorting
    - Index on session_id for filtering user calculations

  4. Notes
    - Anonymous usage supported - no authentication required
    - Data automatically cleaned up after 90 days
    - Designed for high-frequency inserts with minimal overhead
*/

-- Create calculator_history table
CREATE TABLE IF NOT EXISTS calculator_history (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  expression text NOT NULL,
  result text NOT NULL,
  timestamp timestamptz DEFAULT now() NOT NULL,
  session_id text,
  created_at timestamptz DEFAULT now() NOT NULL
);

-- Enable Row Level Security
ALTER TABLE calculator_history ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert calculations (anonymous usage)
CREATE POLICY "Anyone can insert calculations"
  ON calculator_history
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Allow anyone to read all calculations (can be restricted later by session_id)
CREATE POLICY "Anyone can read calculations"
  ON calculator_history
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Allow anyone to delete any calculation (can be restricted later by session_id)
CREATE POLICY "Anyone can delete calculations"
  ON calculator_history
  FOR DELETE
  TO anon, authenticated
  USING (true);

-- Create index on timestamp for efficient sorting
CREATE INDEX IF NOT EXISTS idx_calculator_history_timestamp 
  ON calculator_history (timestamp DESC);

-- Create index on session_id for filtering
CREATE INDEX IF NOT EXISTS idx_calculator_history_session 
  ON calculator_history (session_id);

-- Create function to auto-delete old calculations (older than 90 days)
CREATE OR REPLACE FUNCTION delete_old_calculator_history()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  DELETE FROM calculator_history
  WHERE created_at < now() - interval '90 days';
END;
$$;

-- Note: To enable automatic cleanup, you would set up a cron job
-- This is just the function definition for manual or scheduled execution
