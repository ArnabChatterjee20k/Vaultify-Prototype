-- Execute it in the supabase sql query editor
-- It will create a function match_Files which can used with supabase rpc
-- We get this inside the migrations folder as well
create or replace function match_Files (
  query_embedding vector(384),
  match_threshold float,
  match_count int,
  files_to_be_searched bigint[]
)
returns table (
  id bigint,
  filetype text,
  ipfs_address text,
  description text,
  similarity float
)
language sql stable
as $$
  select
    "files".id,
    "files".ipfs_address,
		"files".filetype,
    "files".description,
    1 - ("files".embedding <=> query_embedding) as similarity
  from "files"
  where 1 - ("files".embedding <=> query_embedding) > match_threshold and "files".id = any(files_to_be_searched)
  order by similarity desc
  limit match_count;
$$;
