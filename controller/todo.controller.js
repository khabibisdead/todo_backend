import Todo from "../model/todo.model.js";

//create a new todo-post
export const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;

//validation
    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    } 

    const todo = new Todo({
      title,
      description,
    });
    await todo.save();

    return res.status(201).json({ message: "Todo created successfully", todo });

    } catch (error) {
      return res.status(500).json({ message: "Error creating todo", error });
    }

}

// get api


export const getTodos = async (req, res) => {
    try {
        //query parameters for pagination
        const {search,sort, page = 1, limit = 10} = req.query;

        //base query
        let query = {};

        //search functionality
        if(search){
            query.title = {$regex: search, $options: "i"};
        }
       



        //sort functionality
        let sortOption = {};
        if(sort === "asc"){
            sortOption.createdAt = 1; // 1 for ascending, -1 for descending
        }
        else if(sort === "desc"){
            sortOption.createdAt = -1;
        }


        //pagination functionality
        const skip = (page - 1) * limit;
        const todos = await Todo.find(query)
            .sort(sortOption)
            .skip(skip)
            .limit(parseInt(limit));


            const totalTodos = await Todo.countDocuments(query);

            return res.status(200).json({
                success: true,
                message: "Todos fetched successfully",
                data : todos,
                total : totalTodos,
                page: parseInt(page),
                limit: parseInt(limit),
            });

    }
    catch (error) {
        return res.status(500).json({ message: "Error fetching todos", error });
    }

}