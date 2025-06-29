package com.celebal.pharma.service;

import com.celebal.pharma.model.Manufacturer;
import com.celebal.pharma.repository.ManufacturerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class ManufacturerService {

    @Autowired
    private ManufacturerRepository manufacturerRepository;

    public List<Manufacturer> getAllManufacturers() {
        return manufacturerRepository.findAll();
    }

    public Manufacturer getManufacturerById(Long id) {
        return manufacturerRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Manufacturer not found"));
    }

    public Manufacturer addManufacturer(Manufacturer manufacturer) {
        return manufacturerRepository.save(manufacturer);
    }

    public Manufacturer updateManufacturer(Long id, Manufacturer updated) {
        Manufacturer existing = getManufacturerById(id);
        existing.setName(updated.getName());
        existing.setLocation(updated.getLocation());
        return manufacturerRepository.save(existing);
    }

    public void deleteManufacturer(Long id) {
        Manufacturer existing = getManufacturerById(id);
        manufacturerRepository.delete(existing);
    }
}
