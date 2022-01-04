import axios from "axios";

const Inventory_API_BASE_URL = "http://localhost:8082/Manager/inventories";

class InventoryService {  

    getInventories() {
        return axios.get(Inventory_API_BASE_URL );

    }
    createInventory(Inventory) {
       return axios.post(Inventory_API_BASE_URL, Inventory);
   }
}

export default new InventoryService()
