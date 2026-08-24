create policy "Admins can upload portfolio files"
on storage.objects
for insert
to authenticated
with check (
  bucket_id = 'portfolio'
  and public.is_admin()
);

create policy "Admins can update portfolio files"
on storage.objects
for update
to authenticated
using (
  bucket_id = 'portfolio'
  and public.is_admin()
)
with check (
  bucket_id = 'portfolio'
  and public.is_admin()
);

create policy "Admins can delete portfolio files"
on storage.objects
for delete
to authenticated
using (
  bucket_id = 'portfolio'
  and public.is_admin()
);