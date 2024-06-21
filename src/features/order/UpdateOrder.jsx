import { useFetcher } from 'react-router-dom';
import { updateOrder } from '../../services/apiRestaurant';
import Button from '../../UI/Button';

function UpdateOrder({ order }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make Priority</Button>;
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function UpdateOrderAction({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
