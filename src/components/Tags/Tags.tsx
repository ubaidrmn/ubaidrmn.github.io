export type Tag = {
    name: string;
    url: string;
}

export default function Tags({ tags }: { tags: Tag[] }) {
    return (
        <div className="tags">
            {tags.map((tag) => (
                <div className="tag">
                    <a href={tag.url} target="_blank" rel="noopener noreferrer">
                        {tag.name}
                    </a>
                </div>
            ))}
        </div>
    );
}
