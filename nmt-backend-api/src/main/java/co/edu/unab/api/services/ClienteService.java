package co.edu.unab.api.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import co.edu.unab.api.models.ClienteModel;
import co.edu.unab.api.repositories.ClienteRepository;

@Service
public class ClienteService {
    @Autowired
    ClienteRepository clienteRepository;

    public ArrayList<ClienteModel> obtenerClientes(){
        return (ArrayList<ClienteModel>) clienteRepository.findAll();
    }

    // VALIDACIONES
    public ClienteModel guardarCliente(ClienteModel cliente){

        // ---  REGLAS DE NEGOCIO  ---
        if (cliente.getId() == null || cliente.getId().trim().isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "ERROR CRÍTICO EN ID: El ID de registro no puede estar en blanco.");
        }
        if (!cliente.getId().matches("^[0-9]+$")) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "FORMATO INVÁLIDO EN ID: El ID debe ser exclusivamente un número no negativo.");
        }


        if (clienteRepository.existsById(cliente.getId())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "ERROR DE DUPLICADO: Ya existe un empleado registrado con el ID " + cliente.getId() + ".");
        }


        double salarioMinimoLegal = 2000000.0;
        if (cliente.getSalario() < salarioMinimoLegal) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "ERROR FINANCIERO: El salario base no puede ser inferior al mínimo legal establecido ($2.000.000).");
        }
        if (cliente.getVentas() < 0) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "ERROR FINANCIERO: El valor de ventas del mes no puede ser negativo.");
        }


        double cargaPrestacionalMinima = cliente.getSalario() * 0.20;
        if (cliente.getPrestaciones() < cargaPrestacionalMinima) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "ERROR FINANCIERO: Las prestaciones deben ser proporcionales a la ley (mínimo un 20% del salario base). Ingrese un valor coherente.");
        }


        if (cliente.getIdentificacion() == null || !cliente.getIdentificacion().matches("^[0-9]{6,10}$")) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "ERROR DE IDENTIFICACIÓN: Debe contener entre 6 y 10 dígitos numéricos (sin letras ni espacios).");
        }


        ArrayList<ClienteModel> clientesExistentes = clienteRepository.findByIdentificacion(cliente.getIdentificacion());
        if (clientesExistentes != null && !clientesExistentes.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "ERROR DE DUPLICADO: La cédula " + cliente.getIdentificacion() + " ya se encuentra asociada a otro empleado en el sistema.");
        }


        String patronTextoConLargo = "^[A-Za-zÁÉÍÓÚáéíóúÜüÑñ\\s]{3,16}$";

        if (cliente.getNombre() == null || !cliente.getNombre().matches(patronTextoConLargo)) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "REGLA DE NEGOCIO VIOLADA EN NOMBRE: Debe tener un mínimo de 3 caracteres, un máximo de 16, y solo puede contener letras.");
        }

        if (cliente.getApellido() == null || !cliente.getApellido().matches(patronTextoConLargo)) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "REGLA DE NEGOCIO VIOLADA EN APELLIDO: Debe tener un mínimo de 3 caracteres, un máximo de 16, y solo puede contener letras.");
        }

     
        cliente.setNombre(cliente.getNombre().trim().toUpperCase());
        cliente.setApellido(cliente.getApellido().trim().toUpperCase());

        return clienteRepository.save(cliente);
    }

    public boolean eliminarCliente(String id){
        if (clienteRepository.existsById(id)){
            clienteRepository.deleteById(id);
            return true;
        }else{
            return false;
        }
    }

    public Optional<ClienteModel> obtenerClientePorId(String id){
        return clienteRepository.findById(id);
    }

    public ArrayList<ClienteModel> obtenerClientePorNombre(String nombre){
        return clienteRepository.findByNombre(nombre.toLowerCase());
    }

    public ArrayList<ClienteModel> obtenerClientePorApellido(String apellido){
        return clienteRepository.buscarPorApellido(apellido.toLowerCase());
    }

    public ArrayList<ClienteModel> obtenerClientePorIdentificacion(String identificacion){
        return clienteRepository.findByIdentificacion(identificacion);
    }
}