/*
  # Fix Calculator History Security Issues

  1. Security Fixes
    - Remove unused index `idx_calculator_history_session` (not being used in queries)
    - Fix function `delete_old_calculator_history` search_path vulnerability by setting explicit search_path

  2. Changes Made
    - Drop the unused session_id index to reduce overhead
    - Recreate the delete function with a fixed search_path
    - Set search_path to empty string for security (prevents search_path injection attacks)

  3. Security Notes
    - Setting search_path to '' ensures the function only uses fully qualified names
    - This prevents malicious users from manipulating search_path to execute unintended code
    - The function now explicitly references public.calculator_history
*/

-- Drop unused index on session_id
DROP INDEX IF EXISTS idx_calculator_history_session;

-- Recreate function with fixed search_path to prevent security vulnerability
CREATE OR REPLACE FUNCTION delete_old_calculator_history()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
BEGIN
  DELETE FROM public.calculator_history
  WHERE created_at < now() - interval '90 days';
END;
$$;
