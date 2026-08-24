import { createClient } from "@/lib/supabase/server";

const STORAGE_BUCKET = "portofolio";

async function uploadImage(
    path: string,
    file: File
) {
    const supabase = await createClient();

    const { error } = await supabase.storage
        .from(STORAGE_BUCKET)
        .upload(path, file, {
            upsert: true,
            contentType: file.type,
        });

    if (error) {
        throw new Error(
            `Error uploading image to ${path}: ${error.message}`
        );
    }

    const { data } = supabase.storage
        .from(STORAGE_BUCKET)
        .getPublicUrl(path);

    return {
        path,
        publicUrl: data.publicUrl,
    };
}

export async function uploadProjectThumbnail(
    projectId: string,
    file: File
) {
    const extension =
        file.name.split(".").pop()?.toLowerCase() ?? "webp";

    return uploadImage(
        `projects/${projectId}/thumbnail.${extension}`,
        file
    )
}

export async function uploadAchievementImage(
    achievementId: string,
    file: File
) {
    const extension =
        file.name.split(".").pop()?.toLowerCase() ?? "webp";

    return uploadImage(
        `achievements/${achievementId}/image.${extension}`,
        file
    );
}

export async function uploadProfileAvatar(
    experienceId: string,
    file: File
) {
    const extension =
        file.name.split(".").pop()?.toLowerCase() ?? "webp";

    return uploadImage(
        `profile/${experienceId}/image.${extension}`,
        file
    );
}

export async function deleteStorageFolder(
    folder: string
) {
    const supabase = await createClient();

    const { data: files, error } =
        await supabase.storage
            .from(STORAGE_BUCKET)
            .list(folder);

    if (error) {
        throw new Error(
            `Error listing files in folder ${folder}: ${error.message}`
        );
    }

    if (!files?.length) {
        return;
    }

    const paths = files.map(
        (file) => `${folder}/${file.name}`
    );

    const { error: deleteError } = await supabase.storage
        .from(STORAGE_BUCKET)
        .remove(paths);

    if (deleteError) {
        throw new Error(
            `Error deleting files in folder ${folder}: ${deleteError.message}`
        );
    }
}