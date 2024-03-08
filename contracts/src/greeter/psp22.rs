#![cfg_attr(not(feature = "std"), no_std, no_main)]

// pub use my_psp22::*;
pub use openbrush::traits::{AccountId, Storage};

// we need to expand this struct before the contract macro is expanded
// that is why we declare it here for this example
#[ink::storage_item]
#[openbrush::accessors(HatedStorageAccessors)]
#[derive(Debug)]
pub struct HatedStorage {
    #[get]
    #[set]
    pub hated_account: AccountId,
}

#[openbrush::implementation(PSP22, PSP22Metadata)]
#[openbrush::contract]
#[ink::contract]
pub mod my_psp22 {
    use crate::*;
    use openbrush::traits::String;

    #[ink(storage)]
    #[derive(Storage)]
    pub struct Contract {
        #[storage_field]
        psp22: psp22::Data,
        #[storage_field]
        metadata: metadata::Data,
        #[storage_field]
        hated_storage: HatedStorage,
    }

    #[overrider(psp22::Internal)]
    fn _before_token_transfer(
        &mut self,
        _from: Option<&AccountId>,
        to: Option<&AccountId>,
        _amount: &Balance,
    ) -> Result<(), PSP22Error> {
        if to == Some(&self.hated_storage.hated_account) {
            return Err(PSP22Error::Custom(String::from("I hate this account!")));
        }
        Ok(())
    }

    impl HatedStorageAccessors for Contract {}

    impl Contract {
        #[ink(constructor)]
        pub fn new(
            total_supply: Balance,
            name: Option<String>,
            symbol: Option<String>,
            decimal: u8,
        ) -> Self {
            let mut instance = Self::default();
            let caller = instance.env().caller();

            instance.metadata.name.set(&name);
            instance.metadata.symbol.set(&symbol);
            instance.metadata.decimals.set(&decimal);

            psp22::Internal::_mint_to(&mut instance, caller, total_supply)
                .expect("Should mint total_supply");

            instance
        }

        #[ink(message)]
        pub fn balance_of(&self) {}
    }
}
