//1. Make Everything optional everything required using typescript
type EverythingOptional = {
  field1?: string;
  field2?: number;
  field3?: boolean;
};

//2. Make three types which can be discriminated by a discriminator field
// for example car, bike, truck types and a Union type Vehicle with a discriminator

//3. Extract type field1 and field2 and create a new type

type ExtractFieldType = {
  field1: string;
  field2: number;
  field3: boolean;
};

//4. Omit field3 and create a new type
type OmitFieldType = {
  field1: string;
  field2: number;
  field3: boolean;
};

//5. Create a generic function whose return type should be the same as the first parameter
