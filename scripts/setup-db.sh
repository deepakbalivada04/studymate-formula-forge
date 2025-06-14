#!/bin/bash

# Check if Supabase CLI is installed
if ! command -v supabase &> /dev/null; then
    echo "Supabase CLI is not installed. Please install it first:"
    echo "npm install -g supabase"
    exit 1
fi

# Start Supabase locally
echo "Starting Supabase locally..."
supabase start

# Apply migrations
echo "Applying database migrations..."
supabase db push

# Generate types
echo "Generating TypeScript types..."
supabase gen types typescript --local > src/types/database.types.ts

echo "Database setup complete!" 