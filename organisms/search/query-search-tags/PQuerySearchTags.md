# Types

```typescript
import { QueryItem } from 'QuerySearch';

export interface QueryTag extends QueryItem<string|number|boolean> {
    invalid?: boolean;
    description?: string;
}

export interface QuerySearchTagsProps {
    tags: QueryTag[];
    timezone: string;
}

export interface QueryValidator {
    (query: QueryItem): boolean;
}

export interface QuerySearchTagsFunctions {
    addTag(query: QueryItem, validator?: QueryValidator): void;
    deleteTag(index: number): void;
    deleteAllTags(): void;
}

export interface QuerySearchTagsListeners {
    init: (props: QuerySearchTagsProps) => void|Promise<void>;
    add: (tags: QueryTag[]) => void|Promise<void>;
    delete: (tags: QueryTag[]) => void|Promise<void>;
    'delete:tag': (idx: number) => void|Promise<void>;
    'delete:all': () => void|Promise<void>;
    change: (tags: QueryTag[]) => void|Promise<void>;
}

```