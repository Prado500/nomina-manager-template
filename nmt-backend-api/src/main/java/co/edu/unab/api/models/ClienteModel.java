package co.edu.unab.api.models;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import co.edu.unab.api.models.BonusModel;

@Document(collection = "clientes")
public class ClienteModel {
    @Id
    private String id;

    private String nombre;
    private String apellido;
    private String telefono;
    private String direccion;
    private String identificacion;
    private int ventas;
    private int prestaciones;
    //private VentasModel ventas;
    private List<BonusModel> bonus;
    private int salario;
    private LocalDate fRegistro;
    



    public ClienteModel() {
    }

   
  


  




    public ClienteModel(String id, String nombre, String apellido, String telefono, String direccion,
            String identificacion, int ventas, int prestaciones, List<BonusModel> bonus, int salario,
            LocalDate fRegistro) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.direccion = direccion;
        this.identificacion = identificacion;
        this.ventas = ventas;
        this.prestaciones = prestaciones;
        this.bonus = bonus;
        this.salario = salario;
        this.fRegistro = fRegistro;
    }










    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public LocalDate getfRegistro() {
        return fRegistro;
    }

    public void setfRegistro(LocalDate fRegistro) {
        this.fRegistro = fRegistro;
    }



    public String getDireccion() {
        return direccion;
    }



    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }



    public String getIdentificacion() {
        return identificacion;
    }



    public void setIdentificacion(String identificacion) {
        this.identificacion = identificacion;
    }



   



    public int getVentas() {
        return ventas;
    }










    public void setVentas(int ventas) {
        this.ventas = ventas;
    }










    public int getPrestaciones() {
        return prestaciones;
    }










    public void setPrestaciones(int prestaciones) {
        this.prestaciones = prestaciones;
    }










    public int getSalario() {
        return salario;
    }



    public void setSalario(int salario) {
        this.salario = salario;
    }





    public List<BonusModel> getBonus() {
        return bonus;
    }





    public void setBonus(List<BonusModel> bonus) {
        this.bonus = bonus;
    }

    

    
}

