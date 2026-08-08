function HowItWorks(){

  const steps = [
    {
      title: "Donate Food 🍱",
      text: "Individuals and restaurants can list surplus food available for donation."
    },

    {
      title: "NGO Collects 🤝",
      text: "Verified NGOs receive requests and collect food from donors."
    },

    {
      title: "Serve People ❤️",
      text: "Food reaches people who need it and helps reduce wastage."
    }
  ];


  return(

    <section className="how-section">

      <h2>
        How FoodBridge Works
      </h2>


      <p className="section-subtitle">
        Simple steps to turn surplus food into meaningful impact.
      </p>



      <div className="cards">

        {
          steps.map((step,index)=>(

            <div className="work-card" key={index}>

              <h3>
                {step.title}
              </h3>

              <p>
                {step.text}
              </p>

            </div>

          ))
        }

      </div>


    </section>

  )

}


export default HowItWorks;