import ItemSchemaModel from "../Model/item.js";

const InsertData = async(req,res) => {
    try {
        const { title, description } = req.body;
        const newItem = new ItemSchemaModel({ title, description });
        await newItem.save();
        res.status(201).json({ message: 'Item inserted successfully' });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};


const carData = async(req,res) => {

  try {
    const filter = {};
    const all = await ItemSchemaModel.find(filter);
    res.status(201).json({message: 'Queried Data', datafetched: all})

  } catch (error){
    res.status(500).json({error: error.message});
  }

}

export {InsertData, carData}