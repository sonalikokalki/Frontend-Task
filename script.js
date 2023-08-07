const containerEl = document.querySelector(".conatiner-body");

const productData = [
  {
    id: 1,
    pair: 1,
    price: 195.0,
    off: 50,
    isPopular: "",
  },
  {
    id: 2,
    pair: 2,
    price: 345.0,
    off: 40,
    isPopular: "Most Popular",
  },
  {
    id: 3,
    pair: 3,
    price: 528.0,
    off: 60,
    isPopular: "",
  },
];

const finalData = productData.map((data) => {
  return `
    
    <div class="accordion" key=${data.id}>
    <input type="radio" name="accordion" id=section${data.id}  />
    <label class="accordion-label" for=section${data.id}>
      <div >
        <p>${data.pair} Pair </p>
        <p>DKK  ${data.price}</p>
      </div>
    <div>
    <p class='popular'>${data.isPopular}</p>  
    <p> ${data.off}% OFF</p></div>
    </label>
    <div class="accordion-content">
      <table>
        <thead>
          <th style>
            <tr>
              <td>Size</td>
              <td>Colour</td>
            </tr>
          </th>
        </thead>

        <tbody>
    
     <tr >
        <td>
            <select name="size" id="size" class="custom-select">
            <option value='S'>S</option>
            <option value='M'>M</option>
            <option value='L'>L</option>
            </select>
        </td>
                
        <td>
            <select name="colour" id="colour">
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            </select>
        </td>
    </tr>
    <tr >
        <td>
            <select name="size" id="size" class="custom-select">
            <option value='S'>S</option>
            <option value='M'>M</option>
            <option value='L'>L</option>
            </select>
        </td>
          
        <td>
            <select name="colour" id="colour">
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            </select>
        </td>
        </tr>
        
        
        
        </tbody>
      </table>
    </div>
  </div>`;
});

containerEl.innerHTML = finalData;
