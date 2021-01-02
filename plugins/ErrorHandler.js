import Swal from 'sweetalert2'

export default function (error) {
  Swal.fire({
    text: error,
    toast: true,
    position: 'bottom-end'
  })
}
