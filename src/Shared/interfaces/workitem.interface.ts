type imageUrl = string;

export interface WorkItem {
    id: string,
    name: string,
    description: string,
    primary: imageUrl,
    images: imageUrl[]
};
