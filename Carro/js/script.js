function ModalSuccess(){
    Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "warning"
      });
}
function ModalSuccessDanger(){
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });

}
function ModalHtml(){
    Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "sucess",
        html:`
           <img src="img/bike1 (1).png">
        <span>⭐</span>
         <span>⭐</span>
          <span>⭐</span>
           <span>⭐</span>
            <span>⭐</span>
           `
      });
}