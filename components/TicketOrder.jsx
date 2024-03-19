function TicketOrder() {
  return (
    <>
      <div className="flex bg-gray-800 justify-between items-center">
        <div className="flex justify-center p-4">
          <p>Gold</p>
        </div>

        <div className="flex justify-center p-4">
          <p>$79.99</p>
        </div>

        <div className="flex justify-center p-4">
          <select name="" id="">
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
            <option value="">5</option>
          </select>
        </div>

        <div className="flex justify-center p-8">
          <button className="py-4 px-8 bg-primarycolor text-white">
            Buy Ticket
          </button>
        </div>
      </div>
    </>
  );
}

export default TicketOrder;
