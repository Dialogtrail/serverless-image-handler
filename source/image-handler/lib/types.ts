// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { SharpOptions } from 'sharp';

import { StatusCodes } from './enums';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Headers = Record<string, any>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ImageEdits = Record<string, any>;

export type Options = Partial<Omit<SharpOptions, 'failOnError'>>;

export class ImageHandlerError extends Error {
  constructor(public readonly status: StatusCodes, public readonly code: string, public readonly message: string) {
    super();
  }
}
