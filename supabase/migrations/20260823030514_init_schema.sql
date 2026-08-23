create extension if not exists "pgcrypto";

create table public.profiles (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  headline text,
  bio text,
  avatar_url text,
  email text,
  github_url text,
  linkedin_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  description text not null,
  thumbnail_url text,
  tech_stack text[] not null default '{}',
  github_url text,
  live_url text,
  is_featured boolean not null default false,
  display_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.experiences (
  id uuid primary key default gen_random_uuid(),
  organization text not null,
  position text not null,
  description text,
  start_date date not null,
  end_date date,
  is_current boolean not null default false,
  tech_stack text[] not null default '{}',
  display_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.skills (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  category text,
  icon_url text,
  display_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table public.achievements (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  organization text,
  description text,
  year integer,
  image_url text,
  credential_url text,
  display_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz not null default now()
);

-- Auto Update

create or replace function public.handle_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger set_profiles_updated_at
before update on public.profiles
for each row
execute function public.handle_updated_at();

create trigger set_projects_updated_at
before update on public.projects
for each row
execute function public.handle_updated_at();

create trigger set_experiences_updated_at
before update on public.experiences
for each row
execute function public.handle_updated_at();

create trigger set_achievements_updated_at
before update on public.achievements
for each row
execute function public.handle_updated_at();

-- RLS

alter table public.profiles enable row level security;
alter table public.projects enable row level security;
alter table public.experiences enable row level security;
alter table public.skills enable row level security;
alter table public.achievements enable row level security;
alter table public.messages enable row level security;

-- Read Policies

create policy "Public can read profiles"
on public.profiles
for select
using (true);

create policy "Public can read projects"
on public.projects
for select
using (true);

create policy "Public can read experiences"
on public.experiences
for select
using (true);

create policy "Public can read skills"
on public.skills
for select
using (true);

create policy "Public can read achievements"
on public.achievements
for select
using (true);

-- Policies for messages table

create policy "Public can submit messages"
on public.messages
for insert
with check (true);

