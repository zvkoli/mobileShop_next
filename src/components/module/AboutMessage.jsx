import Swal from 'sweetalert2';

const AboutMessage = ({ message }) => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-start',
    iconColor: '#FBCB07',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

Toast.fire({
    icon: 'error',
    title: message,
    customClass: {
      popup: 'colored-toast',
    },
  })
}

export default AboutMessage;