import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] px-4 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
                404
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
                Oops! The page you are looking for does not exist.
            </p>
            <Button asChild>
                <Link href="/">
                    Go back Home
                </Link>
            </Button>
        </div>
    );
}
