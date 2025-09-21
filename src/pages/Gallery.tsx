import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// All images from KoalaAiGeneratedImages-Internship
const images = [
  'best_adventure_brands_in_singapore.jpg',
  'best_afternoon_tea_spots_in_singapore.jpg',
  'best_alteration_services_in_singapore.jpg',
  'best_apple_cider_vinegar_brands_in_singapore.jpg',
  'best_beauticians_in_singapore.jpg',
  'best_beef_noodles_in_singapore.jpg',
  'best_brunch_spots_in_singapore.jpg',
  'best_bus_apps_in_singapore.jpg',
  'best_cafes_in_the_east_of_singapore.jpg',
  'best_clinics_for_lasik_eye_surgery_in_singapore.jpg',
  'best_computer_speakers_for_home_office_in_singapore.jpg',
  'best_cupcake_bakeries_in_singapore.jpg',
  'best_curry_chicken_restaurants_in_singapore.jpg',
  'best_cycling_attire_stores_in_singapore.jpg',
  'best_detergent_shops_in_singapore.jpg',
  'best_donut_shops_in_singapore.jpg',
  'best_earphones_shop_in_singapore.jpg',
  'best_earpieces_shop_in_singapore.jpg',
  'best_food_in_lau_pa_sat_in_singapore.jpg',
  'best_food_in_marina_bay_sands_food_court.jpg',
  'best_food_in_paya_lebar_in_singapore.jpg',
  'best_fried_chicken_restaurants_in_singapore.jpg',
  'best_front_load_washing_machines_in_singapore.jpg',
  'best_gastroenterologists_in_singapore.jpg',
  'best_gelato_stalls_in_singapore.jpg',
  'best_gold_jewellery_stores_in_singapore.jpg',
  'best_green_coffee_beans_brands_in_singapore.jpg',
  'best_gynaecologists_for_females_in_singapore.jpg',
  'best_hair_products_in_singapore.jpg',
  'best_halal_turkish_restaurants_in_singapore.jpg',
  'best_halal_western_food_in_singapore.jpg',
  'best_hash_brown_brands_in_singapore.jpg',
  'best_high_tea_buffets_in_singapore.jpg',
  'best_home_coffee_machines_in_singapore.jpg',
  'best_homemade_ice_cream_in_singapore.jpg',
  'best_indian_buffets_in_singapore.jpg',
  'best_indian_food_catering_in_singapore.jpg',
  'best_izakayas_in_singapore.jpg',
  'best_japanese_hair_salons_in_singapore.jpg',
  'best_japanese_skincare_brands_in_singapore.jpg',
  'best_karaoke_spots_in_singapore.jpg',
  'best_katsudon_restaurants_in_singapore.jpg',
  'best_keropok_in_singapore.jpg',
  'best_korean_chicken_restaurants_in_singapore.jpg',
  'best_korean_restaurants_in_singapore.jpg',
  'best_leather_belt_brands_in_singapore.jpg',
  'best_lechon_restaurants_in_singapore.jpg',
  'best_local_restaurants_in_singapore.jpg',
  'best_malay_restaurants_in_singapore.jpg',
  'best_microwaves_to_buy_in_singapore.jpg',
  'best_mineral_engine_oil_in_singapore.jpg',
  'best_monitors_for_gaming_and_content_creation_in_singapore.jpg',
  'best_mookata_restaurants_in_singapore.jpg',
  'best_mountain_bike_brands_in_singapore.jpg',
  'best_nonya_kueh_in_singapore.jpg',
  'best_omakase_restaurants_in_singapore.jpg',
  'best_oncologists_in_singapore.jpg',
  'best_online_board_game_stores_in_singapore.jpg',
  'best_orthodontists_in_singapore.jpg',
  'best_orthopedic_doctors_in_singapore.jpg',
  'best_otah_in_singapore.jpg',
  'best_outdoor_restaurants_in_singapore.jpg',
  'best_pasta_noodle_in_singapore.jpg',
  'best_performance_engine_oil_in_singapore.jpg',
  'best_pizza_delivery_services_in_singapore.jpg',
  'best_place_to_buy_sunscreens_in_singapore.jpg',
  'best_place_to_buy_tower_fans_in_singapore.jpg',
  'best_place_to_buy_window_tint_films_in_singapore.jpg',
  'best_places_to_buy_asus_laptops_in_singapore.jpg',
  'best_places_to_buy_bed_frame_in_singapore.jpg',
  'best_places_to_buy_bluetooth_audio_receivers_in_singapore.jpg',
  'best_places_to_buy_budget_monitors_in_singapore.jpg',
  'best_places_to_buy_built_in_ovens_in_singapore.jpg',
  'best_places_to_buy_car_air_fresheners_in_singapore.jpg',
  'best_places_to_buy_cat_food_in_singapore.jpg',
  'best_places_to_buy_cleansing_milk_in_singapore.jpg',
  'best_places_to_buy_durian_ice_cream_in_singapore.jpg',
  'best_places_to_buy_electric_cars_in_singapore.jpg',
  'best_places_to_buy_eye_cream_in_singapore.jpg',
  'best_places_to_buy_folate_supplements_for_pregnancy_in_singapore.jpg',
  'best_places_to_buy_food_containers_for_lunches_in_singapore.jpg',
  'best_places_to_buy_gaming_headsets_in_singapore.jpg',
  'best_places_to_buy_gaming_monitors_in_singapore.jpg',
  'best_places_to_buy_healthy_lip_balms_in_singapore.jpg',
  'best_places_to_buy_korean_eye_creams_for_skin_care_in_singapore.jpg',
  'best_places_to_buy_l_glutathione_supplements_in_singapore.jpg',
  'best_places_to_buy_lipsticks_in_singapore.jpg',
  'best_places_to_buy_mini_pc_in_singapore.jpg',
  'best_places_to_buy_multivitamins_for_women_in_singapore.jpg',
  'best_places_to_buy_nintendo_switch_lite_in_singapore.jpg',
  'best_places_to_buy_pc_speakers_in_singapore.jpg',
  'best_places_to_buy_ssds_in_singapore.jpg',
  'best_places_to_buy_wireless_ip_cameras_in_singapore.jpg',
  'best_places_to_buy_woks_for_cooking_in_singapore.jpg',
  'best_places_to_eat_bah_kut_teh_in_singapore.jpg',
  'best_places_to_eat_north_indian_food_in_singapore.jpg',
  'best_places_to_eat_taiwan_fried_chicken_in_singapore.jpg',
  'best_plant_nurseries_in_singapore.jpg',
  'best_post_natal_massage_services_in_singapore.jpg',
  'best_pre_owned_rolex_watches_in_singapore.jpg',
  'best_reed_diffusers_to_buy_in_singapore.jpg',
  'best_restaurants_in_bukit_timah.jpg',
  'best_roasted_pork_belly_in_singapore.jpg',
  'best_romantic_restaurants_in_singapore.jpg',
  'best_salmon_dishes_in_singapore.jpg',
  'best_sandwiches_in_singapore.jpg',
  'best_screen_protectors_for_smartphones_in_singapore.jpg',
  'best_shampoos_for_dry_hair_in_singapore.jpg',
  'best_shaping_underwear_for_women_in_singapore.jpg',
  'best_shiseido_makeup_products_in_singapore.jpg',
  'best_spectacle_shops_in_singapore.jpg',
  'best_spray_paint_shop_locations_in_singapore.jpg',
  'best_staycation_spots_for_families_in_singapore.jpg',
  'best_stores_to_buy_concealers_for_asian_skin_in_singapore.jpg',
  'best_stores_to_buy_gaming_pc_in_singapore.jpg',
  'best_stores_to_buy_hiking_shoes_in_singapore.jpg',
  'best_stores_to_buy_samsung_phones_in_singapore.jpg',
  'best_stores_to_buy_shavers_for_men_in_singapore.jpg',
  'best_suit_tailors_in_singapore.jpg',
  'best_swimming_classes_for_adults_in_singapore.jpg',
  'best_tattoo_artists_in_singapore.jpg',
  'best_tequila_bars_in_singapore.jpg',
  'best_therapists_in_singapore.jpg',
  'best_toilet_paper_brands_in_singapore.jpg',
  'best_umbrellas_to_buy_in_singapore.jpg',
  'best_unagi_don_in_singapore.jpg',
  'best_waffle_makers_in_singapore.jpg',
  'best_waffles_in_singapore.jpg',
  'best_wagyu_beef_restaurants_in_singapore.jpg',
  'best_whiskey_bars_in_singapore.jpg',
  'best_winter_boots_in_singapore.jpg',
  'best_wired_earphones_in_singapore.jpg',
  'electricity_provider_locations_in_singapore.jpg',
  'must_have_tea_sets_in_singapore.jpg',
  'must_try_dance_classes_in_singapore.jpg',
  'must_try_food_in_geylang_singapore.jpg',
  'must_try_halal_breakfast_spots_in_singapore.jpg',
  'must_try_indian_restaurants_in_singapore.jpg',
  'must_try_luxury_earrings_in_singapore.jpg',
  'must_try_nasi_ambeng_in_singapore.jpg',
  'must_try_peranakan_buffets_in_singapore.jpg',
  'must_try_restaurants_in_katong_singapore.jpg',
  'must_try_supper_spots_in_singapore.jpg',
  'popular_dry_shampoo_brands_in_singapore.jpg',
  'popular_soup_restaurants_in_singapore.jpg',
  'professional_commercial_cleaning_services_in_singapore.jpg',
  'professional_emcee_services_in_singapore.jpg',
  'top_biryani_delivery_services_in_singapore.jpg',
  'top_christmas_buffet_restaurants_in_singapore.jpg',
  'top_contractors_in_singapore.jpg',
  'top_couple_spa_locations_in_singapore.jpg',
  'top_eyebrow_embroidery_clinics_in_singapore.jpg',
  'top_gado_gado_restaurants_in_singapore.jpg',
  'top_homeopathy_clinics_in_singapore.jpg',
  'top_ipl_treatment_clinics_in_singapore.jpg',
  'top_kaya_jam_shops_in_singapore.jpg',
  'top_luxury_spas_for_pampering_in_singapore.jpg',
  'top_meat_restaurants_in_singapore.jpg',
  'top_north_indian_restaurants_in_singapore.jpg',
  'top_orthopaedic_surgeons_in_singapore.jpg',
  'top_pimple_cream_brands_in_singapore.jpg',
  'top_places_to_buy_car_fragrance_in_singapore.jpg',
  'top_places_to_buy_food_processors_in_singapore.jpg',
  'top_portable_air_conditioners_in_singapore.jpg',
  'top_residential_interior_designers_in_singapore.jpg',
  'top_residential_real_estate_agents_for_hire_in_singapore.jpg',
  'top_shabu_shabu_restaurants_in_singapore.jpg',
  'top_streetwear_designers_in_singapore.jpg',
  'top_taiwan_porridge_restaurants_in_singapore.jpg',
  'top_thai_massage_spas_in_singapore.jpg',
  'top_wallet_brand_stores_in_singapore.jpg',
  'v2-p1o77-k05fn.jpg',
];

export default function Gallery() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIdx === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIdx(null);
      if (e.key === 'ArrowLeft') setLightboxIdx(idx => (idx !== null ? (idx - 1 + images.length) % images.length : null));
      if (e.key === 'ArrowRight') setLightboxIdx(idx => (idx !== null ? (idx + 1) % images.length : null));
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIdx]);

  const openLightbox = (idx: number) => setLightboxIdx(idx);
  const closeLightbox = () => setLightboxIdx(null);
  const prevImage = () => setLightboxIdx(idx => (idx !== null ? (idx - 1 + images.length) % images.length : null));
  const nextImage = () => setLightboxIdx(idx => (idx !== null ? (idx + 1) % images.length : null));

  return (
    <div className="container mx-auto py-10 px-2 sm:px-4 relative">

      <div className="mb-8 pt-16">
        <h1 className="text-2xl sm:text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          All AI Prompted Images
        </h1>
      </div>
      {/* Masonry grid using CSS columns for a Pinterest-like look */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((img, idx) => (
          <div key={img} className="relative mb-4 break-inside-avoid">
            <img
              src={`/portfolioraf/KoalaAiGeneratedImages-Internship/${img}`}
              alt={img.replace(/_/g, ' ').replace(/\.jpg$/, '')}
              className="rounded-lg shadow-md cursor-pointer w-full h-auto object-cover transition-transform duration-200 hover:scale-105"
              loading="lazy"
              onClick={() => openLightbox(idx)}
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-40 rounded-lg flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200 cursor-pointer" onClick={() => openLightbox(idx)}>
              <svg className="w-10 h-10 text-white mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A2 2 0 0020 6.382V5a2 2 0 00-2-2H6a2 2 0 00-2 2v1.382a2 2 0 00.447 1.342L9 10m6 0v10a2 2 0 01-2 2H9a2 2 0 01-2-2V10m6 0H9" /></svg>
              <span className="text-white text-xs font-semibold text-center px-2 line-clamp-2">{img.replace(/_/g, ' ').replace(/\.jpg$/, '')}</span>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-gray-500 dark:text-gray-400 mt-4">Click any image to view full size.</p>

      {/* Lightbox Modal */}
      {lightboxIdx !== null && (
        <div ref={lightboxRef} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold bg-black bg-opacity-40 rounded-full px-3 py-1 hover:bg-opacity-70 transition"
            onClick={closeLightbox}
            aria-label="Close"
          >
            ×
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl font-bold bg-black bg-opacity-40 rounded-full px-3 py-1 hover:bg-opacity-70 transition"
            onClick={prevImage}
            aria-label="Previous"
          >
            ‹
          </button>
          <div className="flex flex-col items-center">
            <img
              src={`/portfolioraf/KoalaAiGeneratedImages-Internship/${images[lightboxIdx]}`}
              alt={images[lightboxIdx].replace(/_/g, ' ').replace(/\.jpg$/, '')}
              className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-lg border-4 border-white"
            />
            <div className="mt-4 text-white text-center">
              <div className="font-semibold text-lg mb-1">{images[lightboxIdx].replace(/_/g, ' ').replace(/\.jpg$/, '')}</div>
              <div className="text-xs opacity-80">{lightboxIdx + 1} / {images.length}</div>
            </div>
          </div>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl font-bold bg-black bg-opacity-40 rounded-full px-3 py-1 hover:bg-opacity-70 transition"
            onClick={nextImage}
            aria-label="Next"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}
