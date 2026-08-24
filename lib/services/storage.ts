import { createClient } from "@/lib/supabase/server";

export async function uploadProjectThumbnail(
    projectId: string,
    file: File
) {
    const supabase = await createClient();

    const extension =
        file.name.split(".").pop()?.toLowerCase() ?? "webp";

    const path = `projects/${projectId}/thumbnail.${extension}`;

    const { data: buckets, error: bucketError } =
        await supabase.storage.listBuckets();

    console.log("Buckets:", buckets);
    console.log("Bucket error:", bucketError);

    const { error } = await supabase.storage
        .from("portofolio")
        .upload(path, file, {
            upsert: true,
            contentType: file.type,
        });

    if (error) {
        throw new Error(
            `Error uploading project thumbnail: ${error.message}`
        );
    }

    const { data } = supabase.storage
        .from("portofolio")
        .getPublicUrl(path);

    return {
        path,
        publicUrl: data.publicUrl,
    };
}