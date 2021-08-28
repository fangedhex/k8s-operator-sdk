export interface FieldData {
  name: string;
  type: string;
}

export class CRD {
  protected name!: string;
  protected singular!: string;
  protected plural!: string;
  protected group!: string;
  protected fields!: FieldData[];

  public getName(): string {
    return this.name;
  }

  public getSingular(): string {
    return this.singular;
  }

  public getPlural(): string {
    return this.plural;
  }

  public getGroup(): string {
    return this.group;
  }

  public getFields(): FieldData[] {
    return this.fields;
  }

  /*public convert(): V1CustomResourceDefinition {
  }*/
}
