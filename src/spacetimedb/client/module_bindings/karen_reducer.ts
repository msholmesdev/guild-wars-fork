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

export type Karen = {
  cardToken: bigint,
  lobbyToken: bigint,
  guildToken: bigint,
};

/**
 * A namespace for generated helper functions.
 */
export namespace Karen {
  /**
  * A function which returns this type represented as an AlgebraicType.
  * This function is derived from the AlgebraicType used to generate this type.
  */
  export function getTypeScriptAlgebraicType(): AlgebraicType {
    return AlgebraicType.createProductType([
      new ProductTypeElement("cardToken", AlgebraicType.createU64Type()),
      new ProductTypeElement("lobbyToken", AlgebraicType.createU64Type()),
      new ProductTypeElement("guildToken", AlgebraicType.createU64Type()),
    ]);
  }

  export function serialize(writer: BinaryWriter, value: Karen): void {
    Karen.getTypeScriptAlgebraicType().serialize(writer, value);
  }

  export function deserialize(reader: BinaryReader): Karen {
    return Karen.getTypeScriptAlgebraicType().deserialize(reader);
  }

}

