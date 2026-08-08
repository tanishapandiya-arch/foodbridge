function FoodCards(){

  const foods = [

    {
      name:"Fresh Cooked Meals",
      quantity:"50 Plates",
      location:"Jaipur",
      donor:"ABC Restaurant"
    },


    {
      name:"Vegetable Packets",
      quantity:"20 Boxes",
      location:"Delhi",
      donor:"Green Kitchen"
    },


    {
      name:"Bakery Items",
      quantity:"100 Items",
      location:"Mumbai",
      donor:"Sweet Corner"
    }

  ];


  return(

    <section className="food-section">


      <h2>
        Available Food Donations 🍱
      </h2>


      <p className="section-subtitle">
        Find fresh surplus food available near you.
      </p>



      <div className="food-cards">


      {
        foods.map((food,index)=>(


          <div className="food-card" key={index}>


            <div className="food-image">
              🍲
            </div>


            <h3>
              {food.name}
            </h3>


            <p>
              Quantity: {food.quantity}
            </p>


            <p>
              Location: {food.location}
            </p>


            <p>
              Donor: {food.donor}
            </p>


            <button>
              Request Food
            </button>


          </div>


        ))
      }


      </div>


    </section>

  )

}


export default FoodCards;