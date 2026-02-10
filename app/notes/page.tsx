//import { createClient } from '@/utils/supabase/server';
/*
import { cookies } from "next/headers";
import { createClient } from "../utils/supabase/server";

export default async function Notes() {
    //const cookieStore = cookies();
    // ajout 28/01/26
    const cookieStore = cookies();

    const supabase = await createClient(cookieStore);
    const { data: notes } = await supabase.from("notes").select();

    return <pre>{JSON.stringify(notes, null, 2)}</pre>
}
*/
