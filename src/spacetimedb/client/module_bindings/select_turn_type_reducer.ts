// THIS FILE IS AUTOMATICALLY GENERATED BY SPACETIMEDB. EDITS TO THIS FILE
// WILL NOT BE SAVED. MODIFY TABLES IN YOUR MODULE SOURCE CODE INSTEAD.

/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import {
  AlgebraicType,
  AlgebraicValue,
  BinaryReader,
  BinaryWriter,
  CallReducerFlags,
  ConnectionId,
  DbConnectionBuilder,
  DbConnectionImpl,
  DbContext,
  ErrorContextInterface,
  Event,
  EventContextInterface,
  Identity,
  ProductType,
  ProductTypeElement,
  ReducerEventContextInterface,
  SubscriptionBuilderImpl,
  SubscriptionEventContextInterface,
  SumType,
  SumTypeVariant,
  TableCache,
  TimeDuration,
  Timestamp,
  deepEqual,
} from "@clockworklabs/spacetimedb-sdk";

import { Turn as __Turn } from "./turn_type";

export type SelectTurnType = {
  lobbyToken: bigint,
  turnType: __Turn,
};

/**
 * A namespace for generated helper functions.
 */
export namespace SelectTurnType {
  /**
  * A function which returns this type represented as an AlgebraicType.
  * This function is derived from the AlgebraicType used to generate this type.
  */
  export function getTypeScriptAlgebraicType(): AlgebraicType {
    return AlgebraicType.createProductType([
      new ProductTypeElement("lobbyToken", AlgebraicType.createU64Type()),
      new ProductTypeElement("turnType", __Turn.getTypeScriptAlgebraicType()),
    ]);
  }

  export function serialize(writer: BinaryWriter, value: SelectTurnType): void {
    SelectTurnType.getTypeScriptAlgebraicType().serialize(writer, value);
  }

  export function deserialize(reader: BinaryReader): SelectTurnType {
    return SelectTurnType.getTypeScriptAlgebraicType().deserialize(reader);
  }

}

