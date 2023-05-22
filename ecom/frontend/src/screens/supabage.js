import {
    createClient
} from '@supabase/supabase-js';



 const supabase = createClient("https://zpplzucbznkfhzthtbfh.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpwcGx6dWNiem5rZmh6dGh0YmZoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3MDI0ODc5NCwiZXhwIjoxOTg1ODI0Nzk0fQ.LHSkMYPitja-y5MzWQpfCYg6j6SLKo8YlnfMNARFL1k");

export default supabase;