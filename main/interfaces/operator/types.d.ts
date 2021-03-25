import type { Struct, bool, u128 } from '@polkadot/types';
/** @name Parameters */
export interface Parameters extends Struct {
    readonly canBeNominated: bool;
    readonly optionExpired: u128;
    readonly optionP: u128;
}
export declare type PHANTOM_OPERATOR = 'operator';
