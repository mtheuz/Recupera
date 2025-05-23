import React, { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { User, MessageCircle, Home, Bell } from "lucide-react";
import Dropdown from "./Dropdown";
import { Box, Button, Modal, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const CustomModal = ({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) => (
  <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-title"
    aria-describedby="modal-description"
  >
    <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#C0D0C3] p-8 rounded-xl shadow-2xl w-full max-w-4xl outline-none">
  <div className="flex justify-between items-center mb-4">
    <h1
     
      className="flex text-[#235347] font-bold text-2xl "
    >
      Cadastre um achado
    </h1>
    <IconButton onClick={handleClose}>
      <CloseIcon sx={{ color: "#235347" }} />
    </IconButton>
  </div>

  <div className="flex gap-5 mb-8">
    <label className="w-1/2 h-[200 px] flex flex-col justify-center items-center bg-[#D9D9D9] rounded-md cursor-pointer">
      <CloudUploadIcon className="text-[#235347] text-6xl" />
      <Typography className="text-[#235347]">Upload Imagem</Typography>
      <input type="file" className="hidden" />
    </label>

    {/* Formulário */}
    <div className="flex flex-col bg-[#AEBFB1] rounded-md p-5 gap-2">
      <input
        placeholder="Título"
        className="bg-[#D9D9D9] rounded-md px-2 py-1 text-[#235347] font-semibold"
      />
      <div className="flex gap-2">
        
        <input
          placeholder="Horário"
          className="bg-[#D9D9D9] rounded-md px-2 py-1 w-1/2 text-[#235347] font-semibold"
        />
        <input
          placeholder="Data"
          className="bg-[#D9D9D9] rounded-md px-2 py-1 w-1/2 text-[#235347] font-semibold"
        />
      </div>
      <div className="flex gap-2">
        <input
          placeholder="Categoria"
          className="bg-[#D9D9D9] rounded-md px-2 py-1 w-full text-[#235347] font-semibold"
        />
      </div>
      <textarea
        placeholder="Descrição"
        className="bg-[#D9D9D9] rounded-md px-2 py-1 h-20 resize-none text-[#235347] font-semibold"
      />
    </div>
  </div>

  <Button
    onClick={handleClose}
    variant="contained"
    className="!bg-[#235347] hover:!bg-[#1b4036] rounded-md  w-full text-[#235347] font-semibold"
  >
    Cadastrar
  </Button>
</Box>

  </Modal>
);

function Header() {
  const { user, checkAuth, logout } = useAuth();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const options = [
    { label: "Meu Perfil", href: "#" },
    { label: "Sair", onClick: logout },
  ];

  useEffect(() => {
    checkAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className="flex items-center mt-5 mx-8 h-[100px] rounded-xl drop-shadow-md shadow-2xl bg-[#235347]">
      <nav className="flex items-center justify-between w-full px-20">
        <img className="w-38" src="/logo.png" alt="Logo" />

        <div className="flex items-center gap-6 text-[#C0D0C3]">
          <a
            onClick={handleOpen}
            className="flex justify-center items-center shadow-2xl border bg-[#061A23] rounded-md border-[#336c5d] px-8 py-1 hover:scale-105 duration-300 cursor-pointer"
          >
            Cadastre um achado
          </a>

          <CustomModal open={open} handleClose={handleClose} />

          {!user ? (
            <>
              <a
                href="/cadastro"
                className="shadow-4xl border rounded-md border-[#C0D0C3] px-8 py-1 hover:scale-110 duration-300 cursor-pointer"
              >
                Cadastre-se
              </a>
              <a
                href="/login"
                className="shadow-2xl border rounded-md border-[#C0D0C3] px-8 py-1 hover:scale-110 duration-300 cursor-pointer"
              >
                Login
              </a>
            </>
          ) : (
            <>
              <Bell className="hover:scale-110 duration-300 cursor-pointer" />
              <MessageCircle className="hover:scale-110 duration-300 cursor-pointer" />
              <a
                href="/"
                className="hover:scale-110 duration-300 cursor-pointer"
              >
                <Home />
              </a>
              <Dropdown icon={<User size={30} />} options={options} />
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
