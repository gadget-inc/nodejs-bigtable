import { GetRowsOptions, PrefixRange } from '../table';
export declare class TableUtils {
    static getRanges(options: GetRowsOptions): PrefixRange[];
    static lessThan(lhs: string, rhs: string): boolean;
    static greaterThan(lhs: string, rhs: string): boolean;
    static lessThanOrEqualTo(lhs: string, rhs: string): boolean;
    static createPrefixRange(start: string): PrefixRange;
}
