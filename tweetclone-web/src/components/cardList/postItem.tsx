export class postItem {
  Id?: string;
  Text?: string;
  CreatedBy?: string;
  CreatedDate?: Date;
  constructor(options?: {
    id?: string;
    text?: string;
    createdBy?: string;
    createdDate?: Date;
  }) {
    this.Id = options && options.id ? options.id : undefined;
    this.Text = options && options.text ? options.text : undefined;
    this.CreatedBy = options && options.createdBy ? options.createdBy : undefined;
    this.CreatedDate = options && options.createdDate ? options.createdDate : undefined;

  }
}
