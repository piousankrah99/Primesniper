package com.PrimeSnipers.PrimeSnipers.PrimeSnipers.PrimeSnipers;


import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
@Slf4j
public class SniperService {



    private final SniperRepository sniperRepository;


    public List<Snipers> getAllSnipers() {
        return sniperRepository.findAll();
    }


    public Snipers addNewSniper(Snipers newSniper) {
        Optional<Snipers> existingSniperOptional =
                sniperRepository.findByMsisdn(newSniper.getMsisdn());

        if (existingSniperOptional.isEmpty()) {
            Snipers savedSniper = sniperRepository.save(newSniper);
            return savedSniper;
        }

        return newSniper;
    }



@Transactional
    //Delete Snipers
    public void deleteSniper(Long id){
        boolean exists = sniperRepository.existsById(id);
        if (!exists){
            throw new IllegalStateException(
                "Snipers with id " + id + "does not exists");
        }
        else {
         sniperRepository.deleteById(id);

        }
    }


    //Return All Snipers


    @Transactional
    public Snipers getSniperByMsisdn(String msisdn) {
        Optional<Snipers> sniper = sniperRepository.findByMsisdn(msisdn);
        return sniper.orElse(null);
    }


    public Snipers updateSniper(Snipers sniper) {
        return sniperRepository.save(sniper);
    }


    public Optional<Snipers> getSniperById(Long id) {
        return sniperRepository.findById(id);
    }



    public boolean isMSISDNAlreadyExists(String msisdn) {
        // Implement the logic to check if a sniper with the given MSISDN already exists
        Optional<Snipers> existingSniper = sniperRepository.findByMsisdn(msisdn);
        return existingSniper.isPresent();
    }

    public Snipers findById(Long id) {
                return sniperRepository.findById(id).get();

            }

    public long countSnipers(){
        return sniperRepository.count();
    }

    public long countSnipersPrepaid() {
        return sniperRepository.countByServiceType(ServiceType.MobilePrepaid);

    }

    public long countSnipersPostpaid() {
        return sniperRepository.countByServiceType(ServiceType.MobilePostpaid);

    }



    //Search Snipers by MSISDN
    public List<Snipers> searchSnipersByMsisdn(String msisdn) {
        return sniperRepository.findByMsisdnContaining(msisdn);
    }



}    

