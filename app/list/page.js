import Image from 'next/image';
import food0 from '/public/food0.png';

export default function List() {
  let product = ['Tomatoes', 'Pasta', 'Coconut'];

  console.log(product);
  return (
    <div>
      <h4 className="title">상품목록</h4>
      {product.map((item, index) => {
        return (
          <div className="food" key={item}>
            <img src={`/food${index}.png`} className="food-img" alt={item} />
            {/* <Image src={food0} className="food-img" alt={item} /> */}
            <h4>{item} $40</h4>
          </div>
        );
      })}
    </div>
  );
}
