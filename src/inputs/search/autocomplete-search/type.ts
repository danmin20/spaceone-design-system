import { MenuItem } from '@/inputs/context-menu/type';
import { SearchEventArgs } from '@/inputs/search/search/type';

export type AutocompleteHandler = (inputText: string) => Promise<{
    results: MenuItem[];
    totalCount: number;
}>

export interface AutocompleteSearchProps {
    placeholder?: string;
    menu: MenuItem[];
    loading: boolean;
    focused: boolean;
    value: string;
    visibleMenu?: boolean;
    isFocused?: boolean;
    results: MenuItem[];
    totalCount: number;
    handler?: AutocompleteHandler;
}


export interface AutocompleteSearchEventArgs {
    input: [string, InputEvent];
    search: [string];
    'hide-menu': [];
    'focus-menu': [number]; // index of focused menu item
    'select-menu': [string, number]; // name, index of selected menu item
    delete: SearchEventArgs['delete'];
}
