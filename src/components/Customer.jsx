import React, { useState, useEffect } from 'react';
import { Menu, X, Scan, ShoppingBag, BarChart3, Gift, Award, ChevronRight, Leaf, Zap, TrendingDown, Eye, EyeOff } from 'lucide-react';
import './Customer.css';

const Customer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [scannedProduct, setScannedProduct] = useState(null);
  const [showPriceDrop, setShowPriceDrop] = useState(true);

  // Sample price drop products
  const priceDropProducts = [
    { id: 1, name: "Organic Bananas", originalPrice: 120, currentPrice: 85, discount: 29, expiry: "2 days", image: "🍌" },
    { id: 2, name: "Fresh Spinach", originalPrice: 40, currentPrice: 28, discount: 30, expiry: "1 day", image: "🥬" },
    { id: 3, name: "Whole Wheat Bread", originalPrice: 55, currentPrice: 42, discount: 24, expiry: "1 day", image: "🍞" },
    { id: 4, name: "Greek Yogurt", originalPrice: 180, currentPrice: 135, discount: 25, expiry: "3 days", image: "🥛" },
    { id: 5, name: "Bell Peppers", originalPrice: 80, currentPrice: 60, discount: 25, expiry: "2 days", image: "🫑" },
    { id: 6, name: "Tomatoes", originalPrice: 60, currentPrice: 45, discount: 25, expiry: "1 day", image: "🍅" }
  ];

  // Sample menu items
  const menuItems = [
    { icon: ShoppingBag, label: "Previous Purchases", color: "menu-icon-1" },
    { icon: BarChart3, label: "Carbon Footprint Dashboard", color: "menu-icon-2" },
    { icon: Gift, label: "Special Offer Products", color: "menu-icon-3" },
    { icon: Award, label: "Points Gained", color: "menu-icon-4" }
  ];

  const handleScan = () => {
    setIsScanning(true);
    // Simulate scanning process
    setTimeout(() => {
      setScannedProduct({
        name: "Organic Apples",
        price: "₹95/kg",
        originalPrice: "₹120/kg",
        expiry: "5 days",
        source: "Local Farm - Pune",
        carbon: "Low Carbon Footprint",
        recyclable: "100% Recyclable Packaging",
        discount: "21% OFF"
      });
      setIsScanning(false);
    }, 2000);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const togglePriceDropVisibility = () => {
    setShowPriceDrop(!showPriceDrop);
  };

  return (
    <div className="customer-container">
      {/* Header/Navbar */}
      <nav className="navbar">
        <div className="navbar-content">
          <div className="navbar-inner">
            {/* Menu Button */}
            <button onClick={toggleMenu} className="menu-button">
              {isMenuOpen ? <X className="menu-icon" /> : <Menu className="menu-icon" />}
            </button>

            {/* Logo */}
            <div className="logo-container">
              <div className="logo-circle">
                <div className="logo-main">
                  <Leaf className="logo-leaf" />
                </div>
                <div className="logo-dot"></div>
              </div>
              <div className="logo-text">
                <h1 className="logo-title">EcoMart</h1>
                <p className="logo-subtitle">Zero Waste Future</p>
              </div>
            </div>

            {/* Scan Button */}
            <button onClick={handleScan} className="scan-button">
              <Scan className="scan-icon" />
              <span className="scan-text">Scan QR</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Side Menu Overlay */}
      {isMenuOpen && (
        <div className="menu-overlay" onClick={toggleMenu}>
          <div className="side-menu" onClick={(e) => e.stopPropagation()}>
            <div className="menu-header">
              <h2 className="menu-title">Menu</h2>
              <p className="menu-subtitle">Your Eco Journey</p>
            </div>
            <div className="menu-items">
              {menuItems.map((item, index) => (
                <button key={index} className="menu-item">
                  <div className="menu-item-content">
                    <item.icon className={`menu-item-icon ${item.color}`} />
                    <span className="menu-item-label">{item.label}</span>
                  </div>
                  <ChevronRight className="menu-arrow" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="main-content">
        {/* Welcome Section */}
        <div className="welcome-section">
          <div className="welcome-content">
            <div className="welcome-text">
              <h2 className="welcome-title">Welcome Back!</h2>
              <p className="welcome-subtitle">Continue your sustainable shopping journey</p>
              <div className="stats-container">
                <div className="stat-item">
                  <Award className="stat-icon" />
                  <span className="stat-text">1,250 Green Points</span>
                </div>
                <div className="stat-item">
                  <Zap className="stat-icon" />
                  <span className="stat-text">15.2kg CO₂ Saved</span>
                </div>
              </div>
            </div>
            <div className="welcome-image">
              <div className="welcome-circle">
                <Leaf className="welcome-leaf" />
              </div>
            </div>
          </div>
        </div>

        {/* Scanning Modal */}
        {isScanning && (
          <div className="scanning-overlay">
            <div className="scanning-modal">
              <div className="scanning-spinner"></div>
              <h3 className="scanning-title">Scanning Product...</h3>
              <p className="scanning-text">Please wait while we fetch product details</p>
            </div>
          </div>
        )}

        {/* Scanned Product Info */}
        {scannedProduct && (
          <div className="scanned-product">
            <div className="scanned-header">
              <h3 className="scanned-title">{scannedProduct.name}</h3>
              <button onClick={() => setScannedProduct(null)} className="close-button">
                <X className="close-icon" />
              </button>
            </div>
            <div className="scanned-content">
              <div className="scanned-pricing">
                <div className="price-row">
                  <span className="price-label">Current Price:</span>
                  <span className="current-price">{scannedProduct.price}</span>
                </div>
                <div className="price-row">
                  <span className="price-label">Original Price:</span>
                  <span className="original-price">{scannedProduct.originalPrice}</span>
                </div>
                <div className="discount-badge">
                  <span className="discount-text">{scannedProduct.discount}</span>
                </div>
              </div>
              <div className="scanned-details">
                <p className="detail-item">
                  <span className="detail-label">Expires in:</span> {scannedProduct.expiry}
                </p>
                <p className="detail-item">
                  <span className="detail-label">Source:</span> {scannedProduct.source}
                </p>
                <p className="eco-feature">{scannedProduct.carbon}</p>
                <p className="eco-feature">{scannedProduct.recyclable}</p>
              </div>
            </div>
          </div>
        )}

        {/* Price Drop Toggle Button */}
        <div className="toggle-container">
          <button onClick={togglePriceDropVisibility} className={`toggle-button ${showPriceDrop ? 'hide' : 'show'}`}>
            {showPriceDrop ? <EyeOff className="toggle-icon" /> : <Eye className="toggle-icon" />}
            <span className="toggle-text">{showPriceDrop ? 'Hide' : 'Show'} Price Drop Products</span>
          </button>
        </div>
      </div>

      {/* Price Drop Products Carousel */}
      {showPriceDrop && (
        <div className="price-drop-section">
          <div className="price-drop-header">
            <div className="price-drop-title-container">
              <TrendingDown className="price-drop-icon" />
              <h2 className="price-drop-title">Dynamic Price Drops</h2>
            </div>
            <p className="price-drop-subtitle">Save more while saving the planet!</p>
          </div>

          <div className="carousel-container">
            <div className="product-carousel">
              {[...priceDropProducts, ...priceDropProducts].map((product, index) => (
                <div key={`${product.id}-${index}`} className="product-card">
                  <div className="product-image">
                    <div className="product-emoji">{product.image}</div>
                    <h3 className="product-name">{product.name}</h3>
                    <div className="product-discount">
                      <span className="discount-percentage">{product.discount}% OFF</span>
                    </div>
                  </div>
                  
                  <div className="product-pricing">
                    <div className="pricing-row">
                      <span className="pricing-label">Was:</span>
                      <span className="old-price">₹{product.originalPrice}</span>
                    </div>
                    <div className="pricing-row">
                      <span className="pricing-label">Now:</span>
                      <span className="new-price">₹{product.currentPrice}</span>
                    </div>
                    <div className="pricing-row">
                      <span className="pricing-label">Expires:</span>
                      <span className="expiry-time">{product.expiry}</span>
                    </div>
                  </div>
                  
                  <button className="add-to-cart">Add to Cart</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Customer;