create extension if not exists "vector" with schema "extensions";


create table "public"."files" (
    "id" bigint generated by default as identity not null,
    "created_at" timestamp with time zone not null default now(),
    "ipfs_address" character varying not null,
    "filetype" character varying not null,
    "description" text,
    "embedding" vector(384)
);


create table "public"."users" (
    "id" bigint generated by default as identity not null,
    "wallet_address" character varying not null,
    "username" character varying not null,
    "totalfiles" bigint default '0'::bigint
);


CREATE UNIQUE INDEX "Users_pkey" ON public.users USING btree (id);

CREATE UNIQUE INDEX "Users_wallet_address_key" ON public.users USING btree (wallet_address);

CREATE UNIQUE INDEX files_ipfs_address_key ON public.files USING btree (ipfs_address);

CREATE UNIQUE INDEX files_pkey ON public.files USING btree (id);

alter table "public"."files" add constraint "files_pkey" PRIMARY KEY using index "files_pkey";

alter table "public"."users" add constraint "Users_pkey" PRIMARY KEY using index "Users_pkey";

alter table "public"."files" add constraint "files_ipfs_address_key" UNIQUE using index "files_ipfs_address_key";

alter table "public"."users" add constraint "Users_wallet_address_key" UNIQUE using index "Users_wallet_address_key";

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.match_files(query_embedding vector, match_threshold double precision, match_count integer, files_to_be_searched bigint[])
 RETURNS TABLE(id bigint, filetype text, ipfs_address text, description text, similarity double precision)
 LANGUAGE sql
 STABLE
AS $function$
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
$function$
;

grant delete on table "public"."files" to "anon";

grant insert on table "public"."files" to "anon";

grant references on table "public"."files" to "anon";

grant select on table "public"."files" to "anon";

grant trigger on table "public"."files" to "anon";

grant truncate on table "public"."files" to "anon";

grant update on table "public"."files" to "anon";

grant delete on table "public"."files" to "authenticated";

grant insert on table "public"."files" to "authenticated";

grant references on table "public"."files" to "authenticated";

grant select on table "public"."files" to "authenticated";

grant trigger on table "public"."files" to "authenticated";

grant truncate on table "public"."files" to "authenticated";

grant update on table "public"."files" to "authenticated";

grant delete on table "public"."files" to "service_role";

grant insert on table "public"."files" to "service_role";

grant references on table "public"."files" to "service_role";

grant select on table "public"."files" to "service_role";

grant trigger on table "public"."files" to "service_role";

grant truncate on table "public"."files" to "service_role";

grant update on table "public"."files" to "service_role";

grant delete on table "public"."users" to "anon";

grant insert on table "public"."users" to "anon";

grant references on table "public"."users" to "anon";

grant select on table "public"."users" to "anon";

grant trigger on table "public"."users" to "anon";

grant truncate on table "public"."users" to "anon";

grant update on table "public"."users" to "anon";

grant delete on table "public"."users" to "authenticated";

grant insert on table "public"."users" to "authenticated";

grant references on table "public"."users" to "authenticated";

grant select on table "public"."users" to "authenticated";

grant trigger on table "public"."users" to "authenticated";

grant truncate on table "public"."users" to "authenticated";

grant update on table "public"."users" to "authenticated";

grant delete on table "public"."users" to "service_role";

grant insert on table "public"."users" to "service_role";

grant references on table "public"."users" to "service_role";

grant select on table "public"."users" to "service_role";

grant trigger on table "public"."users" to "service_role";

grant truncate on table "public"."users" to "service_role";

grant update on table "public"."users" to "service_role";

