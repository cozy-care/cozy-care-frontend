'use client';

import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  useMap,
} from 'react-leaflet';
import { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Button } from "@nextui-org/react";

// หมุดสีแดง
const redMarkerIcon = new L.Icon({
  iconUrl:
    'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  shadowUrl:
    'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  shadowSize: [41, 41],
});

interface MapPickerProps {
  onSelectLocation: (lat: number, lng: number) => void;
}

export default function MapPicker({ onSelectLocation }: MapPickerProps) {
  const [position, setPosition] = useState<[number, number] | null>(null);
  const [address, setAddress] = useState<string | null>(null);

  // ฟังก์ชันดึงที่อยู่จาก lat/lng
  const reverseGeocode = async (lat: number, lng: number) => {
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
      );
      const data = await res.json();
      setAddress(data.display_name);
    } catch (error) {
      console.error("Failed to fetch address", error);
      setAddress("ไม่สามารถดึงที่อยู่ได้");
    }
  };

  // ฟังก์ชันเมื่อผู้ใช้คลิกแผนที่
  function LocationMarker() {
    useMapEvents({
      click(e) {
        const latLng: [number, number] = [e.latlng.lat, e.latlng.lng];
        setPosition(latLng);
        onSelectLocation(...latLng);
        reverseGeocode(...latLng);
      },
    });

    return null;
  }

  // ✅ กำหนดตำแหน่งเริ่มต้นจาก GPS
  useEffect(() => {
    if (!position) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          const latLng: [number, number] = [latitude, longitude];
          setPosition(latLng);
          onSelectLocation(...latLng);
          reverseGeocode(...latLng);
        },
        (err) => {
          console.error("Location error", err);
        }
      );
    }
  }, []);

  function AutoFocusMap({ position }: { position: [number, number] }) {
    const map = useMap();
  
    useEffect(() => {
      map.flyTo(position, 17); // ✅ Zoom 17 แบบ smooth
    }, [position]);
  
    return null;
  }

  // ✅ ปุ่มเลื่อน map ไปตำแหน่งปัจจุบัน
  function GoToCurrentLocationButton() {
    const map = useMap();

    const handleClick = () => {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const latLng: [number, number] = [
            pos.coords.latitude,
            pos.coords.longitude,
          ];
          setPosition(latLng);
          onSelectLocation(...latLng);
          reverseGeocode(...latLng);
          map.flyTo(latLng, 16);
        },
        (err) => {
          alert("ไม่สามารถดึงตำแหน่งได้");
        }
      );
    };

    return (
      <Button
        size="sm"
        className="absolute z-[1000] top-2 right-2 bg-white text-black"
        radius="full"
        onPress={handleClick}
      >
        📍 ใช้ตำแหน่งปัจจุบัน
      </Button>
    );
  }

  return (
    <div className="relative w-full h-[250px]">
      <MapContainer
        center={position || [13.7563, 100.5018]} // fallback
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />

        {position && (
          <Marker
            position={position}
            icon={redMarkerIcon}
            draggable={true}
            eventHandlers={{
              dragend: (e) => {
                const newPos = e.target.getLatLng();
                const latLng: [number, number] = [newPos.lat, newPos.lng];
                setPosition(latLng);
                onSelectLocation(...latLng);
                reverseGeocode(...latLng);
              },
            }}
          />
        )}

        <LocationMarker />
        {position && <AutoFocusMap position={position} />}
        <GoToCurrentLocationButton />
      </MapContainer>

      {/* แสดงที่อยู่ */}
      <div className="text-sm bg-white p-2 mt-2 rounded shadow text-black">
        ที่อยู่: {address || "กำลังโหลด..."}
      </div>
    </div>
  );
}
