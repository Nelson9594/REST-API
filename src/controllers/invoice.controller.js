import * as InvoiceModel from '../models/invoice.model';

export const createOne = async () => {
    const { user } = request;
    const { client, total } = request.body;

    const invoice = await InvoiceModel.createOne({
        client,
        total,
        user
    });
}