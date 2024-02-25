<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * The list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     */
    public function register(): void
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }

    public function render($request, Exception|Throwable $e)
    {
        if ($e instanceof ModelNotFoundException) {
            return response()->json([
                'error' => [
                    'status' => "404",
                    'source' => ['pointer' => $request->path()],
                    'title' => '404 Not found.',
                    'detail' => 'This resource does not exist.',
                ]
            ]);
        }

        return parent::render($request, $e);
    }
}
