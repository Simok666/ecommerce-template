<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ProductNutritionController extends Controller
{

    public function show(Product $product)
    {
        return response()->json([
            'nutrition_image' => $product->getFirstMediaUrl('product-nutrition'),
        ]);
    }

    /**
     * Upload nutrition image for a product.
     */
    public function upload(Request $request, Product $product)
    {
        try {
            $request->validate([
                'nutrition_image' => 'required|image|mimes:jpeg,png,jpg,webp|max:2048',
            ]);

            // Clear existing nutrition image if exists
            $product->clearMediaCollection('product-nutrition');

            // Add new nutrition image
            $media = $product->addMediaFromRequest('nutrition_image')
                ->toMediaCollection('product-nutrition');

            return response()->json([
                'status'  => true,
                'message' => __('Nutrition image uploaded successfully.'),
                'data'    => [
                    'image' => $media->getUrl(),
                ],
            ]);
        } catch (\Throwable $th) {
            Log::error('Nutrition upload failed', [
                'product_id' => $product->id,
                'error'      => $th->getMessage(),
            ]);

            return response()->json([
                'status'  => false,
                'message' => __('Failed to upload nutrition image.'),
                'error'   => $th->getMessage(),
            ], 422);
        }
    }

    /**
     * Delete nutrition image.
     */
    public function delete(Product $product)
    {
        try {
            $product->clearMediaCollection('product-nutrition');

            return response()->json([
                'status'  => true,
                'message' => __('Nutrition image deleted successfully.'),
            ]);
        } catch (\Throwable $th) {
            Log::error('Nutrition image deletion failed', [
                'product_id' => $product->id,
                'error'      => $th->getMessage(),
            ]);

            return response()->json([
                'status'  => false,
                'message' => __('Failed to delete nutrition image.'),
            ], 422);
        }
    }
}
