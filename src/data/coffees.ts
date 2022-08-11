import Tradicional from "../assets/images/tradicional.png";
import Capuccino from "../assets/images/Capuccino.png";
import ChocolateQuente from "../assets/images/ChocolateQuente.png";
import cafeComLeite from "../assets/images/CoffeeandMilk.png";
import Cubano from "../assets/images/Cubano.png";
import americano from "../assets/images/expressoAmericano.png";
import ExpressoCremoso from "../assets/images/expressoCremoso.png";
import Irlandes from "../assets/images/Irlandes.png";
import LatteMacchiato from "../assets/images/Latte.png";
import Mocaccino from "../assets/images/Mocaccino.png";
import Arabe from "../assets/images/Arabe.png";

export const coffees = [
	{
		id: 1,
		tags: ["tradicional"],
		name: "Expresso Tradicional",
		description: "O tradicional café feito com água quente e grãos moídos",
		photo: Tradicional,
		price: 9.5,
	},
	{
		id: 2,
		tags: ["tradicional"],
		name: "Expresso Americano",
		description: "Expresso diluído, menos intenso que o tradicional",
		photo: americano,
		price: 8.9,
	},
	{
		id: 3,
		tags: ["tradicional"],
		name: "Expresso Cremoso",
		description: "Café expresso tradicional com espuma cremosa",
		photo: ExpressoCremoso,
		price: 9.9,
	},	
	{
		id: 4,
		tags: ["tradicional", "com leite"],
		name: "Café com Leite",
		description: "Meio a meio de expresso tradicional com leite vaporizado",
		photo: cafeComLeite,
		price: 6.9,
	},
	{
		id: 5,
		tags: ["tradicional", "com leite"],
		name: "Latte",
		description:
			"Uma dose de café expresso com o dobro de leite e espuma cremosa",
		photo: LatteMacchiato,
		price: 9.9,
	},
	{
		id: 6,
		tags: ["tradicional", "com leite"],
		name: "Capuccino",
		description:
			"Bebida com canela feita de doses iguais de café, leite e espuma",
		photo: Capuccino,
		price: 4.9,
	},
	
	{
		id: 7,
		tags: ["especial", "com leite"],
		name: "Chocolate Quente",
		description: "Bebida feita com chocolate dissolvido no leite quente e café",
		photo: ChocolateQuente,
		price: 9.9,
	},
	{
		id: 8,
		tags: ["especial", "alcoólico", "gelado"],
		name: "Cubano",
		description:
			"Drink gelado de café expresso com rum, creme de leite e hortelã",
		photo: Cubano,
		price: 8.9,
	},	
	{
		id: 9,
		tags: ["especial"],
		name: "Árabe",
		description: "Bebida preparada com grãos de café árabe e especiarias",
		photo: Arabe,
		price: 9.9,
	},
	{
		id: 10,
		tags: ["especial", "alcoólico"],
		name: "Irlandês",
		description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
		photo: Irlandes,
		price: 9.9,
	},
	{
		id: 11,
		tags: ["Tradicional", "com leite"],
		name: "Mocaccino",
		description: "Café expresso com calda de chocolate, pouco leite e espuma",
		photo: Mocaccino,
		price: 9.9,
	},
];