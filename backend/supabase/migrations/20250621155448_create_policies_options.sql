create policy "select_zodiac_signs_public"
on "public"."zodiac_signs"
as permissive
for select
to public
using (true);

create policy "select_genders_public"
on "public"."genders"
as permissive
for select
to public
using (true);

create policy "select_sexualities_public"
on "public"."sexualities"
as permissive
for select
to public
using (true);


create policy "select_ethnicities_public"
on "public"."ethnicities"
as permissive
for select
to public
using (true);

create policy "select_pronouns_public"
on "public"."pronouns"
as permissive
for select
to public
using (true);

create policy "select_pets_public"
on "public"."pets"
as permissive
for select
to public
using (true);

create policy "select_prompts_public"
on "public"."prompts"
as permissive
for select
to public
using (true);
