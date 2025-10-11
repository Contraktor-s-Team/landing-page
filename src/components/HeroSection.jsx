import { Search, ChevronDown } from "lucide-react";
import React, { useState, useEffect } from "react";
import HeroLayoutPic from "/hero-layout-pic.png";

function HeroSection({ bg, hClass, hText, hDesc, placeholderservice }) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [location, setLocation] = useState("");
  const [states, setStates] = useState([]);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [loading, setLoading] = useState(true);
  const [locationLoading, setLocationLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://api.contraktor.africa/api/ArtisanCategory"
        );
        const data = await response.json();
        console.log(data);
        if (data.isSuccess) {
          setCategories(data.data);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchStates = async () => {
      try {
        const response = await fetch(
          "https://api.contraktor.africa/api/CustomAddress/all"
        );
        const data = await response.json();
        console.log(data);
        if (data.isSuccess) {
          setStates(data.data);
        }
      } catch (error) {
        console.error("Error fetching states:", error);
      } finally {
        setLocationLoading(false);
      }
    };

    fetchCategories();
    fetchStates();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showDropdown && !event.target.closest(".dropdown-container")) {
        setShowDropdown(false);
      }
      if (
        showLocationDropdown &&
        !event.target.closest(".location-dropdown-container")
      ) {
        setShowLocationDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown, showLocationDropdown]);

  const handleSearch = () => {
    if (selectedCategory || location) {
      // You can customize this search functionality
      const searchParams = new URLSearchParams();
      if (selectedCategory) searchParams.append("category", selectedCategory);
      if (selectedSubcategory)
        searchParams.append("subcategory", selectedSubcategory);
      if (location) searchParams.append("location", location);

      window.open(
        `https://app.contraktor.com.ng/customer/find-artisans/all?${searchParams.toString()}`,
        "_blank"
      );
    }
  };

  const getSelectedCategoryName = () => {
    if (selectedCategory && selectedSubcategory) {
      const category = categories.find((cat) => cat.id === selectedCategory);
      const subcategory = category?.subcategories.find(
        (sub) => sub.id === selectedSubcategory
      );
      return subcategory ? subcategory.name : "";
    }
    if (selectedCategory) {
      const category = categories.find((cat) => cat.id === selectedCategory);
      return category ? category.name : "";
    }
    return placeholderservice;
  };

  return (
    <div
      className="pt-20 font-inter font-medium bg-no-repeat bg-bottom"
      style={{
        background: bg,
        backgroundSize: "100% 100%",
      }}
    >
      <div className="lg:container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 py-12.5 px-6 sm:px-8">
        <div className="lg:w-1/2 max-w-[595px] space-y-6">
          <h1
            className={`font-manrope font-bold text-[38px] sm:text-[56px] text-center lg:text-start leading-[1] capitalize ${hClass}`}
          >
            {hText}
          </h1>
          <p className="text-neu-dark-1 text-center lg:text-start">{hDesc}</p>

          <div className="items-center rounded-full py-1.75 bg-white border border-neu-light-2 hidden sm:flex">
            <div className="flex-1 px-5 border-r border-[#EBEBEB] relative dropdown-container">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <span
                  className={`text-sm py-1.5 ${
                    selectedCategory ? "text-gray-900" : "text-[#B6B9BE]"
                  }`}
                >
                  {loading ? "Loading..." : getSelectedCategoryName()}
                </span>
                <ChevronDown size={16} className="text-[#B6B9BE]" />
              </div>

              {showDropdown && !loading && (
                <div className="absolute top-full left-0 right-0 bg-white border border-neu-light-2 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto mt-1">
                  {categories.map((category) => (
                    <div key={category.id}>
                      <div
                        className="px-4 py-2 hover:bg-gray-50 cursor-pointer font-medium text-sm text-gray-900"
                        onClick={() => {
                          setSelectedCategory(category.id);
                          setSelectedSubcategory("");
                          setShowDropdown(false);
                        }}
                      >
                        {category.name}
                      </div>
                      {selectedCategory === category.id &&
                        category.subcategories && (
                          <div className="pl-4 border-l-2 border-gray-200">
                            {category.subcategories.map((subcategory) => (
                              <div
                                key={subcategory.id}
                                className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm text-gray-700"
                                onClick={() => {
                                  setSelectedSubcategory(subcategory.id);
                                  setShowDropdown(false);
                                }}
                              >
                                {subcategory.name}
                              </div>
                            ))}
                          </div>
                        )}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="flex items-center gap-3 pl-3 pr-2">
              <div className="relative location-dropdown-container">
                <div
                  className="flex items-center justify-between cursor-pointer min-w-[120px]"
                  onClick={() => setShowLocationDropdown(!showLocationDropdown)}
                >
                  <span
                    className={`text-sm py-1.5 ${
                      location ? "text-gray-900" : "text-[#B6B9BE]"
                    }`}
                  >
                    {locationLoading ? "Loading..." : location || "Location"}
                  </span>
                  <ChevronDown size={16} className="text-[#B6B9BE]" />
                </div>

                {showLocationDropdown && !locationLoading && (
                  <div className="absolute top-full left-0 right-0 bg-white border border-neu-light-2 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto mt-1 min-w-[200px]">
                    {states.map((state, index) => (
                      <div
                        key={index}
                        className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm text-gray-900"
                        onClick={() => {
                          setLocation(state);
                          setShowLocationDropdown(false);
                        }}
                      >
                        {state}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <button
                onClick={handleSearch}
                className="bg-pri-norm-1 hover:bg-pri-dark-1 text-white p-3.5 rounded-full transition-colors duration-300"
              >
                <Search />
              </button>
            </div>
          </div>

          <div className="rounded-full py-1.75 bg-white border border-neu-light-2 sm:hidden">
            <div className="flex items-center gap-3 pl-3 pr-2">
              <div className="relative location-dropdown-container flex-1">
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => setShowLocationDropdown(!showLocationDropdown)}
                >
                  <span
                    className={`text-sm py-1.5 ${
                      location ? "text-gray-900" : "text-[#B6B9BE]"
                    }`}
                  >
                    {locationLoading ? "Loading..." : location || "Location"}
                  </span>
                  <ChevronDown size={16} className="text-[#B6B9BE]" />
                </div>

                {showLocationDropdown && !locationLoading && (
                  <div className="absolute top-full left-0 right-0 bg-white border border-neu-light-2 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto mt-1">
                    {states.map((state, index) => (
                      <div
                        key={index}
                        className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm text-gray-900"
                        onClick={() => {
                          setLocation(state);
                          setShowLocationDropdown(false);
                        }}
                      >
                        {state}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <button
                onClick={handleSearch}
                className="bg-pri-norm-1 hover:bg-pri-dark-1 text-white p-3.5 rounded-full transition-colors duration-300"
              >
                <Search />
              </button>
            </div>
          </div>
        </div>

        <div className="">
          <img src={HeroLayoutPic} alt="" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
