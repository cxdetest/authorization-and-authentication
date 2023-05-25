import Product from '../models/Product';

export const createProduct = async (req, res) => {
  const { name, category, price, imgURL } = req.body;

  const newProduct = new Product({
    name,
    category,
    price,
    imgURL,
  });

  const productSaved = await newProduct.save();
  res.status(201).json(productSaved);
};

export const getProducts = async (req, res) => {
  const products = await Product.find();

  res.status(200).json(products);
};

export const getProductByID = async (req, res) => {
  const product = await Product.findById(req.params.productID);

  res.status(200).json(product);
};

export const updateProductByID = async (req, res) => {
  const { name, category, price, imgURL } = req.body;

  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.productID,
    req.body,
    {
      new: true,
    }
  );

  res.status(204).json(updatedProduct);
};

export const deleteProductByID = async (req, res) => {
  await Product.findByIdAndDelete(req.params.productID);

  res.status(204);
};
