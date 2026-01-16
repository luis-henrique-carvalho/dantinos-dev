import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { asText } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";

import { createClient } from "@/prismicio";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heading } from "@/components/Heading";

export async function generateMetadata(): Promise<Metadata> {
    const client = createClient();
    const page = await client.getByUID("page", "blog").catch(() => notFound());

    return {
        title: asText(page.data.title),
        description: page.data.meta_description,
        openGraph: {
            title: page.data.meta_title ?? undefined,
            images: [{ url: page.data.meta_image.url ?? "" }],
        },
    };
}

export default async function BlogPage() {
    const client = createClient();
    const posts = await client.getAllByType("blog_post", {
        orderings: [
            { field: "my.blog_post.publication_date", direction: "desc" }
        ],
    });

    return (
        <div className="container py-10 md:py-16">
            <Heading className="mb-8 md:mb-12">Blog</Heading>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                    <Card key={post.id} className="flex flex-col h-full hover:shadow-lg transition-shadow">
                        {post.uid}
                        <CardHeader>
                            <CardTitle className="line-clamp-2">
                                <PrismicNextLink document={post} className="hover:underline">
                                    {post.data.title}
                                </PrismicNextLink>
                            </CardTitle>
                            <CardDescription>
                                {post.data.publication_date && new Date(post.data.publication_date).toLocaleDateString()}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <p className="line-clamp-3 text-sm text-muted-foreground">
                                Read more...
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
