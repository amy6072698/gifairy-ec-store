import type { ProductAttributes, ProductDetails } from "@/types/product";

interface ProductDetailTableProps {
  details: ProductDetails;
  attributes: ProductAttributes;
}

const ProductDetailTable = ({
  details,
  attributes,
}: ProductDetailTableProps) => {
  const tableContent = [
    {
      th: "保存期限",
      td: details.expiry || "無",
    },
    {
      th: "產地",
      td: details.origin,
    },
    {
      th: "材質",
      td: details.material,
    },
    {
      th: "內容物",
      td: details.content,
    },
    {
      th: "客製化",
      td: attributes.customizable ? "是" : "否",
    },
    {
      th: "手工製造",
      td: attributes.handmade ? "是" : "否",
    },
  ];

  return (
    <table className="w-full">
      <tbody className="text-left align-top">
        {tableContent.map((item, index) => (
          <tr key={index}>
            <th scope="row" className="w-24 font-normal text-neutral-400">
              {item.th}
            </th>
            <td className="pb-3">{item.td}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductDetailTable;
